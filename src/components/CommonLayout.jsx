function CommonLayout({ children }) {
  return (
    <>
      <h1
        style={{
          fontSize: "36px",
          textShadow: "10px 10px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        김소은 테스트
      </h1>
      <div className="question-section">{children}</div>
    </>
  );
}

export default CommonLayout;
