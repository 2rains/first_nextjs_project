const 원본ID = "ksw";
const 원본PW = "1234";
export default function handler(req, res) {
  console.log(req.body);

  const { id, pw } = req.body;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드 입니다" });
  }

  if (!id) return res.json({ ok: false, message: "아이디를 입력하세요" });
  if (!pw) return res.json({ ok: false, message: "패스워드를 입력하세요" });

  //ID와 PW 일치하는 지 체크
  if ((id === 원본ID) & (pw === 원본PW)) {
    res.json({ ok: true, message: "로그인 완료" });
  } else {
    res.json({ ok: true, message: "아이디와 비밀번호가 일치하지 않습니다" });
  }
}
