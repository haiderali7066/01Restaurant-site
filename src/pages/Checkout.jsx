export default function CheckoutForm() {
  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "4px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div className="font-monster">
      <div class="relative h-64">
        <div class="absolute inset-0 bg-cover bg-center bg-hero-pattern "></div>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative z-10 flex items-start justify-center h-full">
          <h1 class="text-white text-6xl font-fedro mt-20">Check Out</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          padding: "16px",
          marginLeft:"20px",
          marginRight:"20px"
        }}
      >
        <div style={{ flex: "1 1 400px", marginTop: "50px " }}>
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle} htmlFor="firstName">
                First name
              </label>
              <input style={inputStyle} id="firstName" type="text" />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle} htmlFor="lastName">
                Last name
              </label>
              <input style={inputStyle} id="lastName" type="text" />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle} htmlFor="email">
              Email address
            </label>
            <input style={inputStyle} id="email" type="email" />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle} htmlFor="phone">
              Phone number
            </label>
            <input style={inputStyle} id="phone" type="tel" />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle} htmlFor="address">
              Address
            </label>
            <input style={inputStyle} id="address" type="text" />
          </div>
          <div>
            <label style={labelStyle} htmlFor="area">
              Area
            </label>
            <select style={inputStyle} id="area">
              <option value="">Choose Area</option>
              <option value="area1">Area 1</option>
              <option value="area2">Area 2</option>
              <option value="area3">Area 3</option>
            </select>
          </div>
        </div>
        <div
          style={{
            ...cardStyle,
            flex: "1 1 400px",
            marginTop: "50px",
            marginBottom: "60px",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Order Summary</h2>
          {[
            { name: "Product Name", qty: 4, price: 50 },
            { name: "Chicken Tikka Kabab", qty: 150, price: 50 },
            { name: "Product name", qty: 4, price: 50 },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <img
                src="/img/close-up-delicious-chicken-meal.jpg"
                alt={item.name}
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: "bold", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
                  {item.qty} gm net
                </p>
              </div>
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.price}$</p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #ccc", paddingTop: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <p style={{ margin: 0 }}>Sub-total</p>
              <p style={{ margin: 0 }}>130$</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <p style={{ margin: 0 }}>Shipping</p>
              <p style={{ margin: 0 }}>Free</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <p style={{ margin: 0 }}>Discount</p>
              <p style={{ margin: 0 }}>25%</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <p style={{ margin: 0 }}>Tax</p>
              <p style={{ margin: 0 }}>54.76$</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "16px",
              }}
            >
              <p style={{ margin: 0 }}>Total</p>
              <p style={{ margin: 0 }}>432.65$</p>
            </div>
            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#14b8a6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
