const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  },
];

todos.map(({ id }) => {
  console.log(id);
});

const [a, b, c, d] = todos;

const { id } = a;

console.log(id);

// ()=>{}

todos.map(function({ text }) {
  console.log(text);
});
