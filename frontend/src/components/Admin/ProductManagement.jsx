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
//   {
//     id: "PRD-002",
//     name: "Latest fashion shoe",
//     price: 25,
//     stock: 20,
//     category: "shoes",
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

//     if (editingProduct) {
//       setProducts((prev) =>
//         prev.map((p) => (p.id === editingProduct.id ? payload : p))
//       );
//     } else {
//       setProducts((prev) => [...prev, payload]);
//     }

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

//       <div className="bg-white rounded shadow overflow-x-auto">
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

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-lg p-6 w-full max-w-md space-y-4"
//           >
//             <h2 className="text-lg font-semibold">
//               {editingProduct ? "Edit Product" : "Add Product"}
//             </h2>

//             <input
//               name="name"
//               placeholder="Product name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />

//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             >
//               <option value="">Select category</option>
//               {CATEGORIES.map((c) => (
//                 <option key={c.value} value={c.value}>
//                   {c.label}
//                 </option>
//               ))}
//             </select>

//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             >
//               <option value="">Select gender</option>
//               {GENDERS.map((g) => (
//                 <option key={g.value} value={g.value}>
//                   {g.label}
//                 </option>
//               ))}
//             </select>

//             {SIZE_OPTIONS[formData.category] && (
//               <div>
//                 <p className="text-sm font-medium mb-2">Available Sizes</p>
//                 <div className="flex flex-wrap gap-2">
//                   {SIZE_OPTIONS[formData.category].map((size) => (
//                     <button
//                       type="button"
//                       key={size}
//                       onClick={() => toggleSize(size)}
//                       className={`px-3 py-1 border rounded text-sm ${
//                         formData.sizes.includes(size)
//                           ? "bg-black text-white"
//                           : ""
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <input
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={handleImagesUpload}
//               className="cursor-pointer"
//             />

//             <div className="flex gap-2 flex-wrap">
//               {formData.images.map((img, i) => (
//                 <div key={i} className="relative">
//                   <img
//                     src={img.preview}
//                     alt=""
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeImage(i)}
//                     className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-xs"
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 name="featured"
//                 checked={formData.featured}
//                 onChange={handleChange}
//               />
//               Show on Home Slider
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 name="isNew"
//                 checked={formData.isNew}
//                 onChange={handleChange}
//               />
//               Mark as New
//             </label>

//             <div className="flex justify-end gap-3 pt-4">
//               <button
//                 type="button"
//                 onClick={() => setIsModalOpen(false)}
//                 className="border px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-black text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProducts;
import { useState } from "react";

const CATEGORIES = [
  { label: "Accessories", value: "accessories" },
  { label: "Shirts", value: "shirts" },
  { label: "Shoes", value: "shoes" },
  { label: "Electronics", value: "electronics" },
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

const initialProducts = [
  {
    id: "PRD-001",
    name: "Luxury Cap",
    price: 45,
    stock: 30,
    category: "accessories",
    gender: "men",
    sizes: [],
    images: [],
    isNew: true,
    featured: true,
  },
];

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    gender: "",
    sizes: [],
    images: [],
    isNew: false,
    featured: false,
  });

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      stock: "",
      category: "",
      gender: "",
      sizes: [],
      images: [],
      isNew: false,
      featured: false,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      id: editingProduct ? editingProduct.id : `PRD-${Date.now()}`,
    };

    setProducts((prev) =>
      editingProduct
        ? prev.map((p) => (p.id === editingProduct.id ? payload : p))
        : [...prev, payload]
    );

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={openAddModal}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Gender</th>
              <th className="px-6 py-3 text-left">Sizes</th>
              <th className="px-6 py-3 text-left">Images</th>
              <th className="px-6 py-3 text-left">Featured</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4">{p.name}</td>
                <td className="px-6 py-4 capitalize">{p.category}</td>
                <td className="px-6 py-4 capitalize">{p.gender}</td>
                <td className="px-6 py-4">
                  {p.sizes.length ? p.sizes.join(", ") : "—"}
                </td>
                <td className="px-6 py-4">{p.images.length}</td>
                <td className="px-6 py-4">{p.featured ? "✅" : "—"}</td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => openEditModal(p)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow space-y-2">
            <div className="flex justify-between">
              <h3 className="font-semibold">{p.name}</h3>
              <span>{p.featured ? "✅" : ""}</span>
            </div>
            <p className="text-sm capitalize">Category: {p.category}</p>
            <p className="text-sm capitalize">Gender: {p.gender}</p>
            <p className="text-sm">
              Sizes: {p.sizes.length ? p.sizes.join(", ") : "—"}
            </p>
            <p className="text-sm">Images: {p.images.length}</p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => openEditModal(p)}
                className="text-blue-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RESPONSIVE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md md:max-w-lg h-full md:h-auto overflow-y-auto shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 p-6"
            >
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

              <input
                name="price"
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

              <input
                name="stock"
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />

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
                        className={`px-3 py-1 border rounded text-sm ${
                          formData.sizes.includes(size)
                            ? "bg-black text-white"
                            : ""
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImagesUpload}
                className="cursor-pointer"
              />

              <div className="flex gap-2 flex-wrap">
                {formData.images.map((img, i) => (
                  <div key={i} className="relative">
                    <img
                      src={img.preview}
                      alt=""
                      className="w-16 h-16 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                Show on Home Slider
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isNew"
                  checked={formData.isNew}
                  onChange={handleChange}
                />
                Mark as New
              </label>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
