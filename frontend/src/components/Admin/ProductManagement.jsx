// import { useState } from "react";

// const CATEGORIES = [
//   { label: "Accessories", value: "accessories" },
//   { label: "Shirts", value: "shirts" },
//   { label: "Shoes", value: "shoes" },
//   { label: "Electronics", value: "electronics" },
// ];

// const GENDERS = [
//   { label: "Men", value: "men" },
//   { label: "Women", value: "women" },
//   { label: "Unisex", value: "unisex" },
// ];

// const SIZE_OPTIONS = {
//   shirts: ["XS", "S", "M", "L", "XL"],
//   shoes: ["38", "39", "40", "41", "42", "43"],
// };

// const initialProducts = [
//   {
//     id: "PRD-001",
//     name: "Luxury Cap",
//     price: 45,
//     stock: 30,
//     category: "accessories",
//     gender: "men",
//     sizes: [],
//     images: [],
//     isNew: true,
//     featured: true,
//   },
// ];

// const AdminProducts = () => {
//   const [products, setProducts] = useState(initialProducts);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     category: "",
//     gender: "",
//     sizes: [],
//     images: [],
//     isNew: false,
//     featured: false,
//   });

//   const openAddModal = () => {
//     setEditingProduct(null);
//     setFormData({
//       name: "",
//       price: "",
//       stock: "",
//       category: "",
//       gender: "",
//       sizes: [],
//       images: [],
//       isNew: false,
//       featured: false,
//     });
//     setIsModalOpen(true);
//   };

//   const openEditModal = (product) => {
//     setEditingProduct(product);
//     setFormData(product);
//     setIsModalOpen(true);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//       ...(name === "category" ? { sizes: [] } : {}),
//     }));
//   };

//   const toggleSize = (size) => {
//     setFormData((prev) => ({
//       ...prev,
//       sizes: prev.sizes.includes(size)
//         ? prev.sizes.filter((s) => s !== size)
//         : [...prev.sizes, size],
//     }));
//   };

//   const handleImagesUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const previews = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));

//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ...previews],
//     }));
//   };

//   const removeImage = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       ...formData,
//       id: editingProduct ? editingProduct.id : `PRD-${Date.now()}`,
//     };

//     setProducts((prev) =>
//       editingProduct
//         ? prev.map((p) => (p.id === editingProduct.id ? payload : p))
//         : [...prev, payload],
//     );

//     setIsModalOpen(false);
//   };

//   const handleDelete = (id) => {
//     if (confirm("Delete this product?")) {
//       setProducts((prev) => prev.filter((p) => p.id !== id));
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">Products</h1>
//         <button
//           onClick={openAddModal}
//           className="bg-black text-white px-4 py-2 rounded"
//         >
//           Add Product
//         </button>
//       </div>

//       {/* DESKTOP TABLE */}
//       <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left">Name</th>
//               <th className="px-6 py-3 text-left">Category</th>
//               <th className="px-6 py-3 text-left">Gender</th>
//               <th className="px-6 py-3 text-left">Sizes</th>
//               <th className="px-6 py-3 text-left">Images</th>
//               <th className="px-6 py-3 text-left">Featured</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y">
//             {products.map((p) => (
//               <tr key={p.id}>
//                 <td className="px-6 py-4">{p.name}</td>
//                 <td className="px-6 py-4 capitalize">{p.category}</td>
//                 <td className="px-6 py-4 capitalize">{p.gender}</td>
//                 <td className="px-6 py-4">
//                   {p.sizes.length ? p.sizes.join(", ") : "—"}
//                 </td>
//                 <td className="px-6 py-4">{p.images.length}</td>
//                 <td className="px-6 py-4">{p.featured ? "✅" : "—"}</td>
//                 <td className="px-6 py-4 space-x-3">
//                   <button
//                     onClick={() => openEditModal(p)}
//                     className="text-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p.id)}
//                     className="text-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE CARDS */}
//       <div className="md:hidden space-y-4">
//         {products.map((p) => (
//           <div key={p.id} className="bg-white p-4 rounded shadow space-y-2">
//             <div className="flex justify-between">
//               <h3 className="font-semibold">{p.name}</h3>
//               <span>{p.featured ? "✅" : ""}</span>
//             </div>
//             <p className="text-sm capitalize">Category: {p.category}</p>
//             <p className="text-sm capitalize">Gender: {p.gender}</p>
//             <p className="text-sm">
//               Sizes: {p.sizes.length ? p.sizes.join(", ") : "—"}
//             </p>
//             <p className="text-sm">Images: {p.images.length}</p>
//             <div className="flex gap-4 pt-2">
//               <button
//                 onClick={() => openEditModal(p)}
//                 className="text-blue-600 text-sm"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(p.id)}
//                 className="text-red-600 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RESPONSIVE MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-md md:max-w-lg h-full md:h-auto overflow-y-auto shadow-lg">
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col space-y-4 p-6"
//             >
//               <h2 className="text-lg font-semibold">
//                 {editingProduct ? "Edit Product" : "Add Product"}
//               </h2>

//               <input
//                 name="name"
//                 placeholder="Product name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//                 required
//               />

//               <input
//                 name="price"
//                 type="number"
//                 placeholder="Price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//                 required
//               />

//               <input
//                 name="stock"
//                 type="number"
//                 placeholder="Stock"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//                 required
//               />

//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select category</option>
//                 {CATEGORIES.map((c) => (
//                   <option key={c.value} value={c.value}>
//                     {c.label}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full border p-2 rounded"
//                 required
//               >
//                 <option value="">Select gender</option>
//                 {GENDERS.map((g) => (
//                   <option key={g.value} value={g.value}>
//                     {g.label}
//                   </option>
//                 ))}
//               </select>

//               {SIZE_OPTIONS[formData.category] && (
//                 <div>
//                   <p className="text-sm font-medium mb-2">Available Sizes</p>
//                   <div className="flex flex-wrap gap-2">
//                     {SIZE_OPTIONS[formData.category].map((size) => (
//                       <button
//                         type="button"
//                         key={size}
//                         onClick={() => toggleSize(size)}
//                         className={`px-3 py-1 border rounded text-sm ${
//                           formData.sizes.includes(size)
//                             ? "bg-black text-white"
//                             : ""
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleImagesUpload}
//                 className="cursor-pointer"
//               />

//               <div className="flex gap-2 flex-wrap">
//                 {formData.images.map((img, i) => (
//                   <div key={i} className="relative">
//                     <img
//                       src={img.preview}
//                       alt=""
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removeImage(i)}
//                       className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-xs"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="featured"
//                   checked={formData.featured}
//                   onChange={handleChange}
//                 />
//                 Show on Home Slider
//               </label>

//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="isNew"
//                   checked={formData.isNew}
//                   onChange={handleChange}
//                 />
//                 Mark as New
//               </label>

//               <div className="flex justify-end gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="border px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-black text-white px-4 py-2 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProducts;

import { useEffect, useState, useRef } from "react";
import API from "../../api/api";
import ConfirmationModal from "../Common/ConfirmationModal";

/* ================= CONSTANTS ================= */
const CATEGORIES = [
  { label: "Accessories", value: "accessories" },
  { label: "Shirts", value: "shirts" },
  { label: "Trousers", value: "trousers" },
  { label: "Shoes", value: "shoes" },
  { label: "Artifacts", value: "artifacts" },
];

const GENDERS = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Unisex", value: "unisex" },
];

const SIZE_OPTIONS = {
  shirts: ["XS", "S", "M", "L", "XL"],
  shoes: ["38", "39", "40", "41", "42", "43"],
};

const emptyForm = {
  name: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  gender: "",
  sizes: [],
  images: [], // This will store objects: { file: File, preview: string }
  isNew: false,
  featured: false,
};

/* ================= COMPONENT ================= */
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState({
    isOpen: false,
    productId: null,
    productName: "",
    isDeleting: false,
  });
  const hasFetched = useRef(false);

  /* ================= FETCH ================= */
  const fetchProducts = async () => {
    try {
      const res = await API.get("/products/getProducts");
      setProducts(Array.isArray(res.data.products) ? res.data.products : []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchProducts();
  }, []);

  /* ================= MODAL ================= */
  const openAddModal = () => {
    setEditingProduct(null);
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      images: product.images.map((img) => ({
        preview: img.url,
        isExisting: true,
      })),
    });
    setIsModalOpen(true);
  };

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "category" ? { sizes: [] } : {}),
    }));
  };

  const toggleSize = (size) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...previews],
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  /* ================= SUBMIT 1st part editing was not working (THE FIX) ================= */
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Use FormData for Multer/Multipart support
  //   const data = new FormData();
  //   data.append("name", formData.name);
  //   data.append("description", formData.description || "No description");
  //   data.append("price", formData.price);
  //   data.append("stock", formData.stock);
  //   data.append("category", formData.category);
  //   data.append("gender", formData.gender);
  //   data.append("featured", formData.featured);
  //   data.append("isNew", formData.isNew);

  //   // Backend expects comma-separated string for sizes
  //   data.append("sizes", formData.sizes.join(","));

  //   // Append new image files only
  //   formData.images.forEach((imgObj) => {
  //     if (imgObj.file) {
  //       data.append("images", imgObj.file);
  //     }
  //   });

  //   try {
  //     if (editingProduct) {
  //       await API.put(`/products/updateProduct/${editingProduct._id}`, data);
  //     } else {
  //       await API.post("/products/addProduct", data);
  //     }

  //     setIsModalOpen(false);
  //     fetchProducts();
  //   } catch (err) {
  //     console.error("Save Error:", err.response?.data || err.message);
  //     alert(err.response?.data?.message || "Failed to save product");
  //   }
  // };

  /* ================= SUBMIT (FIXED) ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // 1. Explicitly append ONLY the fields the backend needs
    // Do NOT append _id, __v, createdAt, or updatedAt to the body
    data.append("name", formData.name);
    data.append("description", formData.description || "");
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("category", formData.category);
    data.append("gender", formData.gender);
    data.append("featured", formData.featured);

    // Check if your backend uses 'isNew' or 'newProduct' based on your Postman snippet
    // Your Postman shows "newProduct", but your state uses "isNew".
    // Make sure this matches your backend model!
    data.append("isNew", formData.isNew);

    // 2. Convert sizes array to string
    data.append("sizes", formData.sizes.join(","));

    // 3. Append new image files
    formData.images.forEach((imgObj) => {
      if (imgObj.file) {
        data.append("images", imgObj.file);
      }
    });

    try {
      if (editingProduct) {
        // The ID goes in the URL ONLY
        await API.put(`/products/updateProduct/${editingProduct._id}`, data);
      } else {
        await API.post("/products/addProduct", data);
      }

      setIsModalOpen(false);
      fetchProducts();
    } catch (err) {
      console.error("Save Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to save product");
    }
  };
  /* ================= DELETE ================= */
  const openDeleteConfirm = (productId, productName) => {
    setDeleteConfirm({
      isOpen: true,
      productId,
      productName,
      isDeleting: false,
    });
  };

  const handleDeleteConfirm = async () => {
    setDeleteConfirm((prev) => ({ ...prev, isDeleting: true }));
    try {
      await API.delete(`/products/deleteProduct/${deleteConfirm.productId}`);
      setProducts((prev) =>
        prev.filter((p) => p._id !== deleteConfirm.productId),
      );
      setDeleteConfirm({
        isOpen: false,
        productId: null,
        productName: "",
        isDeleting: false,
      });
    } catch (err) {
      console.error("Delete Error:", err);
      setDeleteConfirm((prev) => ({ ...prev, isDeleting: false }));
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm({
      isOpen: false,
      productId: null,
      productName: "",
      isDeleting: false,
    });
  };

  /* ================= UI ================= */
  if (loading) return <p className="text-center py-20">Loading products...</p>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={openAddModal}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto w-full hidden md:block">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm">Name</th>
              <th className="px-6 py-3 text-left text-sm">Category</th>
              <th className="px-6 py-3 text-left text-sm">Gender</th>
              <th className="px-6 py-3 text-left text-sm">Sizes</th>
              <th className="px-6 py-3 text-left text-sm">Images</th>
              <th className="px-6 py-3 text-left text-sm">Featured</th>
              <th className="px-6 py-3 text-left text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p._id}>
                <td className="px-6 py-4 text-sm">{p.name}</td>
                <td className="px-6 py-4 capitalize text-sm">{p.category}</td>
                <td className="px-6 py-4 capitalize text-sm">{p.gender}</td>
                <td className="px-6 py-4 text-sm">
                  {p.sizes?.join(", ") || "—"}
                </td>
                <td className="px-6 py-4 text-sm">{p.images?.length || 0}</td>
                <td className="px-6 py-4 text-sm">{p.featured ? "✅" : "—"}</td>
                <td className="px-6 py-4 space-x-3 text-sm">
                  <button
                    onClick={() => openEditModal(p)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openDeleteConfirm(p._id, p.name)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden space-y-4 w-full">
        {products.map((p) => (
          <div key={p._id} className="bg-white rounded shadow p-4 space-y-3">
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-gray-600 capitalize">
                  {p.category} | {p.gender}
                </p>
              </div>
              <span className="text-lg">{p.featured ? "✅" : "—"}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <p>
                <span className="font-medium">Sizes:</span>{" "}
                {p.sizes?.join(", ") || "—"}
              </p>
              <p>
                <span className="font-medium">Images:</span>{" "}
                {p.images?.length || 0}
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => openEditModal(p)}
                className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => openDeleteConfirm(p._id, p.name)}
                className="flex-1 bg-red-600 text-white py-2 rounded text-sm hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-semibold">
                {editingProduct ? "Edit Product" : "Add Product"}
              </h2>

              <input
                name="name"
                placeholder="Product name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  name="stock"
                  type="number"
                  placeholder="Stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
              </div>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select category</option>
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select gender</option>
                {GENDERS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>

              {SIZE_OPTIONS[formData.category] && (
                <div>
                  <p className="text-sm font-medium mb-2">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {SIZE_OPTIONS[formData.category].map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 border rounded text-sm ${formData.sizes.includes(size) ? "bg-black text-white" : "bg-white"}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm font-medium mb-2">Product Images</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImagesUpload}
                  className="mb-2 w-full text-sm cursor-pointer"
                />
                <div className="flex gap-2 flex-wrap">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative">
                      <img
                        src={img.preview}
                        alt=""
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />
                  Show on Home Slider
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="isNew"
                    checked={formData.isNew}
                    onChange={handleChange}
                  />
                  Mark as New
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      <ConfirmationModal
        isOpen={deleteConfirm.isOpen}
        title="Delete Product"
        message={`Are you sure you want to delete "${deleteConfirm.productName}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        isLoading={deleteConfirm.isDeleting}
        isDangerous={true}
      />
    </div>
  );
};

export default AdminProducts;
