export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=창서";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "짱구");
  };
  const onClickLoadCookie = () => {
    const MyCookie = document.cookie
      .split("; ")
      .filter((el) => el.includes("aaa="))[0]
      .replace("aaa=", "");
    console.log(MyCookie);
  };
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키에 저장</button>
      <button onClick={onClickSaveLocal}>로컬스토리지에 저장</button>
      <button onClick={onClickSaveSession}>세션스토리지에 저장</button>
      =============================================================
      <button onClick={onClickLoadCookie}>쿠키조회</button>
      <button onClick={onClickLoadLocal}>로컬스토리지조회</button>
      <button onClick={onClickLoadSession}>세션스토리지조회</button>
    </div>
  );
}
