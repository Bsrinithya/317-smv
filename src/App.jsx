return (
  <div>
    <Header
      currentUser={currentUser}
      setPage={setPage}
      handleLogout={handleLogout}
      cartCount={cart.length}
      search={search}
      setSearch={setSearch}
    />

    {page === "dashboard" && (
      <>
        <Dashboard currentUser={currentUser} />
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </>
    )}

    {page === "feedback" && <Feedback />}
    {page === "address" && <Address />}

    {/* NEW CAMERA PAGE */}
    {page === "camera" && <CameraCapture />}
  </div>
);
