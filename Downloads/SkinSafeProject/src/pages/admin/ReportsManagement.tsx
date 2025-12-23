import React, { useState } from 'react';
import { FileText, Eye, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { FormField } from '../../components/FormField';

interface Report {
  id: number;
  code: string;
  description: string;
  purchaseLocation: string;
  contact: string;
  status: 'Pending' | 'Reviewed' | 'Resolved';
  submittedDate: string;
  adminNotes?: string;
}

export function ReportsManagement() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [filter, setFilter] = useState<string>('all');

  // Mock report data
  const allReports: Report[] = [
    {
      id: 1,
      code: 'FAKE-001',
      description: 'The product packaging looks suspicious and the QR code does not match the product description.',
      purchaseLocation: 'Online marketplace - ThirdPartyStore.com',
      contact: 'customer1@email.com',
      status: 'Pending',
      submittedDate: '2024-12-05 10:30',
      adminNotes: ''
    },
    {
      id: 2,
      code: 'UNKNOWN-XYZ',
      description: 'Purchased this product but the verification code is not recognized by the system.',
      purchaseLocation: 'Local beauty shop on Main Street',
      contact: 'buyer@test.com',
      status: 'Reviewed',
      submittedDate: '2024-12-04 15:45',
      adminNotes: 'Contacted manufacturer for verification. Awaiting response.'
    },
    {
      id: 3,
      code: 'SS-2023-OLD123',
      description: 'The product seems expired and the verification shows incorrect dates.',
      purchaseLocation: 'SuperMart Store, Downtown',
      contact: '',
      status: 'Resolved',
      submittedDate: '2024-12-03 09:20',
      adminNotes: 'Confirmed as authentic but expired batch. Retailer contacted for product recall.'
    },
    {
      id: 4,
      code: 'COUNTERFEIT-ABC',
      description: 'The texture and smell of the product is completely different from genuine products.',
      purchaseLocation: 'Street vendor',
      contact: 'alert@consumer.org',
      status: 'Pending',
      submittedDate: '2024-12-02 14:10',
      adminNotes: ''
    },
    {
      id: 5,
      code: 'SUSPICIOUS-789',
      description: 'Price was too low compared to retail. Product verification failed.',
      purchaseLocation: 'Discount online store',
      contact: 'shopper@mail.com',
      status: 'Reviewed',
      submittedDate: '2024-12-01 11:55',
      adminNotes: 'Investigating the retailer. Added to watchlist.'
    }
  ];

  const filteredReports = filter === 'all' 
    ? allReports 
    : allReports.filter(r => r.status.toLowerCase() === filter);

  const handleView = (report: Report) => {
    setSelectedReport(report);
    setAdminNotes(report.adminNotes || '');
    setIsViewModalOpen(true);
  };

  const handleStatusUpdate = (newStatus: Report['status']) => {
    if (selectedReport) {
      // Update status logic would go here
      setSelectedReport({ ...selectedReport, status: newStatus, adminNotes });
      setIsViewModalOpen(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      Pending: 'bg-warning-100 text-warning-700',
      Reviewed: 'bg-primary-100 text-primary-700',
      Resolved: 'bg-secondary-100 text-secondary-700'
    };

    const icons = {
      Pending: Clock,
      Reviewed: AlertTriangle,
      Resolved: CheckCircle
    };

    const Icon = icons[status as keyof typeof icons];

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${styles[status as keyof typeof styles]}`}>
        <Icon size={14} />
        {status}
      </span>
    );
  };

  const tableColumns = [
    {
      key: 'id',
      label: 'Report ID',
      sortable: true,
      render: (value: number) => (
        <span className="font-mono text-gray-900">#{value.toString().padStart(4, '0')}</span>
      )
    },
    {
      key: 'code',
      label: 'Verification Code',
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-danger-600">{value}</span>
      )
    },
    {
      key: 'purchaseLocation',
      label: 'Purchase Location',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => getStatusBadge(value)
    },
    {
      key: 'submittedDate',
      label: 'Submitted',
      sortable: true
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: Report) => (
        <button
          onClick={() => handleView(row)}
          className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          title="View Details"
        >
          <Eye size={18} />
        </button>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-danger-500 to-danger-600 rounded-xl flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-gray-900">Reports Management</h2>
              <p className="text-gray-600">Review and manage submitted product reports</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Total Reports</p>
            <p className="text-3xl text-gray-900">{allReports.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Pending</p>
            <p className="text-3xl text-warning-600">
              {allReports.filter(r => r.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Reviewed</p>
            <p className="text-3xl text-primary-600">
              {allReports.filter(r => r.status === 'Reviewed').length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Resolved</p>
            <p className="text-3xl text-secondary-600">
              {allReports.filter(r => r.status === 'Resolved').length}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['all', 'pending', 'reviewed', 'resolved'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                filter === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Reports Table */}
        <Table
          columns={tableColumns}
          data={filteredReports}
          searchPlaceholder="Search reports..."
          itemsPerPage={10}
        />

        {/* View Report Modal */}
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title={`Report #${selectedReport?.id.toString().padStart(4, '0')}`}
          size="lg"
        >
          {selectedReport && (
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <div>{getStatusBadge(selectedReport.status)}</div>
                <p className="text-sm text-gray-500">{selectedReport.submittedDate}</p>
              </div>

              {/* Report Details */}
              <div className="bg-danger-50 rounded-xl p-6 border border-danger-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="text-danger-600 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h6 className="text-danger-900 mb-2">Reported Verification Code</h6>
                    <p className="font-mono text-danger-700 bg-white px-3 py-2 rounded-lg inline-block">
                      {selectedReport.code}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Description</p>
                  <p className="text-gray-900 bg-gray-50 rounded-lg p-4">
                    {selectedReport.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Purchase Location</p>
                  <p className="text-gray-900">{selectedReport.purchaseLocation}</p>
                </div>

                {selectedReport.contact && (
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Contact Information</p>
                    <p className="text-gray-900">{selectedReport.contact}</p>
                  </div>
                )}
              </div>

              {/* Admin Notes */}
              <div className="border-t border-gray-200 pt-6">
                <FormField
                  label="Admin Notes"
                  id="adminNotes"
                  placeholder="Add notes about this report..."
                  textarea
                  rows={4}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedReport.status === 'Pending' && (
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() => handleStatusUpdate('Reviewed')}
                  >
                    <AlertTriangle size={18} />
                    Mark as Reviewed
                  </Button>
                )}
                {selectedReport.status !== 'Resolved' && (
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() => handleStatusUpdate('Resolved')}
                  >
                    <CheckCircle size={18} />
                    Mark as Resolved
                  </Button>
                )}
                <Button variant="ghost" fullWidth onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
