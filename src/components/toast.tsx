

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void; // Function to hide the toast
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed z-[9999] top-5 right-10 -translate-x-1/2 bg-black text-white px-3 py-5 rounded-md cursor-pointer animate-fadeInOut" onClick={onClose}>
      {message}
    </div>
  );
};

export default Toast;