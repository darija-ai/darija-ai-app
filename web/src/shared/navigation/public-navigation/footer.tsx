const Footer = () => {
  return (
    <>
      <footer className="bg-orange-50 py-12">
        <div className="container mx-auto px-4 text-black">
          <div className="pt-8 border-t border-black text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} DarijaAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
