FROM node:14

# RUN mkdir class_build 굳이 따로 만들 필요 없음
# CMD는 한번밖에 못 씀 RUN은 원하는대로 마음껏 사용 
# 설치까지 다 된 파일을 만들어놓음 실행중인 명령어(yarn start)는 RUN에 들어갈 수 없음 
# CMD는 압축된 파일을 실행시키는 용도 
# docker-compose build => 최적화
# docker-compose up => 마지막 CMD 명령 실행
# node_modules,.next,out 제외시켜야함 .dockerignore
# 미리 해놓고 저장해놓은 명령어들
#미리저장안됨
WORKDIR /class_build/
COPY . /class_build/

# node_modules까지 copy되기 때문에 각자 다른 버전의 node가 copy될 수 있음 그렇기 때문에 안에서 yarn install 해줘야함
RUN yarn install
RUN yarn build:ssr
CMD yarn start
