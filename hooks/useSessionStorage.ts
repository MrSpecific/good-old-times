const useSessionStorage = () => {
  if (!window)
    return {
      get: () => {},
      set: () => {},
    };

  return {
    get: sessionStorage.getItem,
    set: sessionStorage.setItem,
  };
};

export default useSessionStorage;
