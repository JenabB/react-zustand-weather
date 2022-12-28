import create from "zustand";

type State = {
  bears: number;
};

type Action = {
  increasePopulation: (bears: State["bears"]) => void;
  descreasePopulation: (bears: State["bears"]) => void;
  increaseByUserInput: (bears: State["bears"]) => void;
};
const useBearStore = create<State & Action>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  descreasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears - 1 })),
  increaseByUserInput: (input: number) =>
    set((state: { bears: number }) => ({ bears: state.bears + input })),
}));

export default useBearStore;
