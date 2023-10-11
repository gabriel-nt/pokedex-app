export namespace FilterModalProps {
  export type Default = {
    isVisible: boolean;
    onClose: () => void;
  };

  export namespace Components {
    export type Header = {
      onResetFilters: () => void;
    };

    export type Footer = {
      onClose: () => void;
      onSubmit: () => void;
    };
  }
}
