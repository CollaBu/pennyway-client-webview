import { useHides } from '../api';

interface HideButtonProps {
  feedId: number;
  onClose: () => void;
}

export const HideButton: React.FC<HideButtonProps> = ({ feedId, onClose }) => {
  const { hideFeed, isPending } = useHides(feedId);

  const handleClickHideBtn = () => {
    hideFeed();
    onClose();
  };

  return (
    <button
      className='item-btn b2md'
      onClick={handleClickHideBtn}
      disabled={isPending}
    >
      게시물 숨기기
    </button>
  );
};
