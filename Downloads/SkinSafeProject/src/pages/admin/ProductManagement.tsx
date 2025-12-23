import React, { useState } from 'react';
import { Package, Edit2, Trash2, Eye, Plus } from 'lucide-react';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Modal } from '../../components/Modal';
import { ProductCard } from '../../components/ProductCard';
import { QRCodeDisplay } from '../../components/QRCodeDisplay';

interface Product {
  id: number;
  code: string;
  name: string;
  brand: string;
  type: string;
  batchNumber: string;
  manufactureDate: string;
  expiryDate: string;
  manufacturer: string;
  status: string;
}

export function ProductManagement() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Mock product data
  const products: Product[] = [
    {
      id: 1,
      code: 'SS-2024-ABC123',
      name: 'Hydrating Face Serum',
      brand: 'GlowBeauty Pro',
      type: 'Serum',
      batchNumber: 'BATCH2024001',
      manufactureDate: 'January 15, 2024',
      expiryDate: 'January 15, 2026',
      manufacturer: 'GlowBeauty Laboratories Inc.',
      status: 'Active'
    },
    {
      id: 2,
      code: 'SS-2024-DEF456',
      name: 'Vitamin C Brightening Cream',
      brand: 'RadiantGlow',
      type: 'Moisturizer',
      batchNumber: 'BATCH2024002',
      manufactureDate: 'February 10, 2024',
      expiryDate: 'February 10, 2026',
      manufacturer: 'RadiantGlow Industries',
      status: 'Active'
    },
    {
      id: 3,
      code: 'SS-2024-GHI789',
      name: 'Anti-Aging Night Serum',
      brand: 'YouthRevive',
      type: 'Serum',
      batchNumber: 'BATCH2024003',
      manufactureDate: 'March 5, 2024',
      expiryDate: 'March 5, 2026',
      manufacturer: 'YouthRevive Corp',
      status: 'Active'
    },
    {
      id: 4,
      code: 'SS-2024-JKL012',
      name: 'Gentle Cleansing Foam',
      brand: 'PureClean',
      type: 'Cleanser',
      batchNumber: 'BATCH2024004',
      manufactureDate: 'April 20, 2024',
      expiryDate: 'April 20, 2025',
      manufacturer: 'PureClean Solutions Ltd',
      status: 'Active'
    },
    {
      id: 5,
      code: 'SS-2024-MNO345',
      name: 'Hyaluronic Acid Toner',
      brand: 'HydraBoost',
      type: 'Toner',
      batchNumber: 'BATCH2024005',
      manufactureDate: 'May 15, 2024',
      expiryDate: 'May 15, 2026',
      manufacturer: 'HydraBoost International',
      status: 'Active'
    }
  ];

  const handleView = (product: Product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    // Delete logic would go here
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const tableColumns = [
    {
      key: 'code',
      label: 'Code',
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-primary-600">{value}</span>
      )
    },
    {
      key: 'name',
      label: 'Product Name',
      sortable: true
    },
    {
      key: 'brand',
      label: 'Brand',
      sortable: true
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
      render: (value: string) => (
        <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">
          {value}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
          {value}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: Product) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleView(row)}
            className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            title="View Details"
          >
            <Eye size={18} />
          </button>
          <button
            className="p-2 text-accent-600 hover:bg-accent-50 rounded-lg transition-colors"
            title="Edit Product"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-2 text-danger-600 hover:bg-danger-50 rounded-lg transition-colors"
            title="Delete Product"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Package className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-gray-900">Product Management</h2>
              <p className="text-gray-600">Manage all registered products</p>
            </div>
          </div>
          <Button size="lg">
            <Plus size={20} />
            Add New Product
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Total Products</p>
            <p className="text-3xl text-gray-900">{products.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Active Products</p>
            <p className="text-3xl text-secondary-600">{products.filter(p => p.status === 'Active').length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Product Types</p>
            <p className="text-3xl text-primary-600">5</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-1">Brands</p>
            <p className="text-3xl text-accent-600">{new Set(products.map(p => p.brand)).size}</p>
          </div>
        </div>

        {/* Products Table */}
        <Table
          columns={tableColumns}
          data={products}
          searchPlaceholder="Search products..."
          itemsPerPage={10}
        />

        {/* View Product Modal */}
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title="Product Details"
          size="lg"
        >
          {selectedProduct && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProductCard product={selectedProduct} />
                <div className="flex justify-center items-start">
                  <QRCodeDisplay code={selectedProduct.code} />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h6 className="text-gray-900 mb-4">Additional Information</h6>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <p className="text-gray-900">{selectedProduct.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Product ID</p>
                    <p className="font-mono text-gray-900">{selectedProduct.id}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" fullWidth onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
                <Button fullWidth>
                  <Edit2 size={18} />
                  Edit Product
                </Button>
              </div>
            </div>
          )}
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title="Delete Product"
          size="sm"
        >
          {selectedProduct && (
            <div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{selectedProduct.name}</strong>? 
                This action cannot be undone and will remove the product from the verification system.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="danger" fullWidth onClick={confirmDelete}>
                  <Trash2 size={18} />
                  Delete Product
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}