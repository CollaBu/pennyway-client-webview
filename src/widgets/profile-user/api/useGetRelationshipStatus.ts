import { useQuery } from '@tanstack/react-query';

import { fetchRelationshipStatus } from '@/shared/axios';
import { QUERY_KEYS } from '@/shared/react-query';

export const useGetRelationshipStatus = (userId: number) => {
  const {
    data: relationshipStatusData,
    isLoading: relationshipLoading,
    isError: relationshipError,
    refetch: refetchRelationshipStatus,
  } = useQuery({
    queryKey: [QUERY_KEYS.follow, userId],
    queryFn: () => fetchRelationshipStatus(userId),
  });

  return {
    relationshipStatusData,
    relationshipLoading,
    relationshipError,
    refetchRelationshipStatus,
  };
};
