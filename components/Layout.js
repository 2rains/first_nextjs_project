import NavBar from "./NavBar";

export default function Layout(props) {
  // console.log(props);
  return (
    <div id="sunmoon">
      <NavBar />
      {props.children}
      {/* props.chilren은 index.js의 <layout> aaaa</layout>임!! // 결과값 : aaaa(메뉴만들 때 유용!) */}
    </div>
  );
}
