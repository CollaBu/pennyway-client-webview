import NetworkErrorImage from '@public/assets/image/network_error.png';
import './NetworkError.scss';

interface NetworkErrorProps {
  refetch: () => void;
}

export const NetworkError: React.FC<NetworkErrorProps> = ({ refetch }) => {
  return (
    <div className='network-error-wrapper'>
      <div className='network-error'>
        <img src={NetworkErrorImage} alt='network-error' />
        <div className='error-message'>
          <h1 className='error-title h2semi'>인터넷에 연결되지 않았어요</h1>
          <p className='error-description b1md'>
            연결 확인 후 다시 시도해주세요
          </p>
        </div>
        <button className='refetch-btn b1semi' onClick={refetch}>
          재시도하기
        </button>
      </div>
    </div>
  );
};
