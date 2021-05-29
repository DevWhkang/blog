// declare module '*.mp4' {
//   export default '' as string;
// }

declare module '*.mp4' {
  const src: string;
  export default src;
}
