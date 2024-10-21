import { Console } from "@woowacourse/mission-utils";

class App {
  // 전체 실행 흐름
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요."); // 시작

    const INPUT = await Console.readLineAsync(""); // 사용자 입력
    // 빈 문자열일 경우 결과를 0으로 출력
    if (INPUT.trim() === "") {
      Console.print("결과 : 0"); // 결과
      return; // 함수 종료
    }
    const NUMBERS = this.parseInput(INPUT); // 구분자 처리
  }
  // 구분자 처리하기
  parseInput(INPUT) {
    const BASE_SEPARATORS = ",:"; // 기본 구분자
    const CUSTOM_SEPARATOR = this.getCustomSeparator(INPUT);
    const SEPARATORS = CUSTOM_SEPARATOR
      ? `${BASE_SEPARATORS}${CUSTOM_SEPARATOR}`
      : BASE_SEPARATORS;

    const numbersString = CUSTOM_SEPARATOR
      ? INPUT.substring(5 + CUSTOM_SEPARATOR.length)
      : INPUT;
    return this.extractNumbers(numbersString, SEPARATORS);
  }
  // 커스텀 구분자 처리하기
  getCustomSeparator(INPUT) {
    if (INPUT.startsWith("//") && INPUT.includes("\\n")) {
      return INPUT[2]; // 커스텀 구분자를 반환
    }
    return null;
  }
}

export default App;
