export namespace SkeletonProps {
  export type Default = {
    width: number;
    height: number;
    variant?: 'rect' | 'rounded';
  };

  export namespace Styles {
    export type Container = {
      width: number;
      height: number;
      isRounded: boolean;
    };
  }
}
