import React, { useState } from 'react'

export default function TapProductDetails() {
    const [activeTab, setActiveTab] = useState("details");
    return <>
        <div className="w-full p-8 bg-[#f9f9f9]">

            {/* ---------------------- TABS ---------------------- */}
            <div className="flex border-b mb-6">
                <button
                    className={`px-6 py-3 text-sm ${activeTab === "details"
                        ? "border-b-2 border-green-600 text-green-600"
                        : "text-gray-600"
                        }`}
                    onClick={() => setActiveTab("details")}
                >
                    Product Details
                </button>

                <button
                    className={`px-6 py-3 text-sm ${activeTab === "reviews"
                        ? "border-b-2 border-green-600 text-green-600"
                        : "text-gray-600"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews (6)
                </button>

                <button
                    className={`px-6 py-3 text-sm ${activeTab === "shipping"
                        ? "border-b-2 border-green-600 text-green-600"
                        : "text-gray-600"
                        }`}
                    onClick={() => setActiveTab("shipping")}
                >
                    Shipping & Returns
                </button>
            </div>
            {/* ---------------------- TAB CONTENT ---------------------- */}
            {activeTab === "details" && (
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-semibold mb-4">Product Description</h2>

                    <h3 className="font-semibold mb-2">Benefits</h3>
                    <ul className="list-disc ml-5 text-gray-600 space-y-1">
                        <li>Rich in vitamins C and K</li>
                        <li>Good source of fiber and antioxidants</li>
                        <li>Supports heart health</li>
                        <li>Helps regulate blood sugar</li>
                        <li>Promotes healthy skin</li>
                    </ul>

                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                            <h3 className="font-semibold mb-2">Product Details</h3>
                            <p><strong>Origin:</strong> California, USA</p>
                            <p><strong>Cultivation:</strong> Organic</p>
                            <p><strong>Storage:</strong> Refrigerate upon arrival</p>
                            <p><strong>Shelf Life:</strong> 5–7 days refrigerated</p>
                        </div>
                    </div>

                    <h3 className="font-semibold mt-6 mb-1">How to Store</h3>
                    <p className="text-gray-700">
                        Keep strawberries refrigerated in their original container.
                        Wash before eating.
                    </p>

                    <h3 className="font-semibold mt-6 mb-2">Certifications</h3>
                    <div className="flex gap-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm">
                            USDA Organic
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">
                            Non-GMO
                        </span>
                    </div>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-xl font-semibold mb-3">Reviews</h2>
                    <p className="text-gray-500 text-sm">No reviews loaded yet…</p>
                </div>
            )}

            {activeTab === "shipping" && (
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-xl font-semibold mb-3">Shipping & Returns</h2>
                    <p className="text-gray-600">
                        Free shipping on orders above 50$.
                        You can return items within 30 days.
                    </p>
                </div>
            )}

        </div>
    </>
}
