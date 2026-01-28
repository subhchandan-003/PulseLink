import React, { useState } from 'react';
import { BarChart3, AlertTriangle, TrendingUp, Clock, CheckCircle2, Flag, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Case } from '../types';

interface PVOpsDashboardProps {
  cases: Case[];
}

export const PVOpsDashboard: React.FC<PVOpsDashboardProps> = ({ cases }) => {
  const { t } = useLanguage();
  const [filterRisk, setFilterRisk] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  const filteredCases = cases.filter((c) => {
    const matchesRisk = filterRisk === 'all' || c.riskLevel === filterRisk;
    const matchesSearch = c.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  const stats = {
    total: cases.length,
    completed: cases.filter((c) => c.status === 'completed').length,
    pending: cases.filter((c) => c.status === 'pending').length,
    highRisk: cases.filter((c) => c.riskLevel === 'high-risk').length,
  };

  const completionRate = ((stats.completed / stats.total) * 100).toFixed(1);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high-risk':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'elevated':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'escalated':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('pvOpsDashboard')}</h1>
          <p className="text-gray-600">{t('dashboard')}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-medical-blue">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Cases</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
              </div>
              <BarChart3 size={32} className="text-medical-blue opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-medical-green">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.completed}</p>
                <p className="text-sm text-gray-500 mt-1">{completionRate}% complete</p>
              </div>
              <CheckCircle2 size={32} className="text-medical-green opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pending}</p>
              </div>
              <Clock size={32} className="text-yellow-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-red-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">High Risk</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.highRisk}</p>
                <p className="text-sm text-red-600 font-semibold mt-1">⚠️ Needs attention</p>
              </div>
              <AlertTriangle size={32} className="text-red-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Queue */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Case Queue (by Risk)</h2>
                <TrendingUp size={20} className="text-gray-400" />
              </div>

              {/* Filters */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by patient name or case ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-medical-blue text-sm"
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  {['all', 'high-risk', 'elevated', 'routine'].map((risk) => (
                    <button
                      key={risk}
                      onClick={() => setFilterRisk(risk)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        filterRisk === risk
                          ? 'bg-medical-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {risk === 'all' ? 'All Cases' : risk.replace('-', ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Case List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredCases.length > 0 ? (
                  filteredCases.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedCase(c)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                        selectedCase?.id === c.id ? 'border-medical-blue bg-blue-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{c.patientName}</h3>
                          <p className="text-xs text-gray-500">{c.id}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                          <span className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColor(c.riskLevel)}`}>
                            {c.riskLevel}
                          </span>
                          <span className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(c.status)}`}>
                            {c.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{c.eventType}</span>
                        <span>Due: {c.dueDate}</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {c.missingFields.slice(0, 2).map((field, idx) => (
                          <span key={idx} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            Missing: {field}
                          </span>
                        ))}
                        {c.missingFields.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{c.missingFields.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No cases found</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Case Details / Analytics */}
          <div className="space-y-6">
            {/* Analytics Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Completion Rate</span>
                    <span className="font-semibold text-gray-900">{completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-medical-green h-2 rounded-full"
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Avg. Response Time</span>
                    <span className="font-semibold text-gray-900">4.2 hrs</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Data Completeness</span>
                    <span className="font-semibold text-gray-900">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-medical-blue h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-off Analysis */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Drop-off Reasons</h3>
              <div className="space-y-3 text-sm">
                {[
                  { reason: 'Scam Fear', count: 8, pct: 32 },
                  { reason: 'Time Constraints', count: 5, pct: 20 },
                  { reason: 'Language Barrier', count: 4, pct: 16 },
                  { reason: 'Tech Issues', count: 3, pct: 12 },
                ].map((item) => (
                  <div key={item.reason}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{item.reason}</span>
                      <span className="font-semibold text-gray-900">{item.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Template Performance */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Message Template Performance</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900">WhatsApp (Hindi)</p>
                  <p className="text-green-700 text-xs">↑ 76% completion rate</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">SMS Fallback</p>
                  <p className="text-blue-700 text-xs">↔ 42% completion rate</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">IVR Voice (Beta)</p>
                  <p className="text-gray-700 text-xs">↑ 61% completion rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Case Details */}
        {selectedCase && (
          <div className="mt-8 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Case Details: {selectedCase.patientName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Missing Fields</h3>
                <ul className="space-y-2">
                  {selectedCase.missingFields.map((field, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <Flag size={14} className="text-yellow-500" />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Next Action</h3>
                <button className="w-full bg-medical-blue hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                  View Full Case & Take Action
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
