'use client';

const SuccessPage = () => {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col items-center justify-center gap-6">
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">
        We sent the invoice to your e-mail
      </h2>
      <h3 className="">You are being redirected to the order page...</h3>
    </div>
  );
};

export default SuccessPage;
