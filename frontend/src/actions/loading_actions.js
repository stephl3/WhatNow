export const NOW_LOADING = 'NOW_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const nowLoading = () => ({
  type: NOW_LOADING
});

export const stopLoading = () => ({
  type: STOP_LOADING
});