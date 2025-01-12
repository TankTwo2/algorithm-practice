import re

def convert_to_snake_case(title):
    # 1. 소문자로 변환
    title = title.lower()
    # 2. 특수 문자 제거 (알파벳, 숫자, 공백을 제외한 문자 제거)
    title = re.sub(r'[^a-z0-9\s]', '', title)
    # 3. 연속된 공백을 하나의 '_'로 변환
    title = re.sub(r'\s+', '_', title)
    return title

if __name__ == "__main__":
    # 사용자로부터 문자열 입력 받기
    input_title = input("변환할 문자열을 입력하세요: ")
    result = convert_to_snake_case(input_title)
    print("변환된 문자열:", result)