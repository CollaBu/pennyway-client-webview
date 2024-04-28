declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

export declare global {
  interface Window {
    setAccessToken: (accessToken: string) => void;
  }
}
