export function* genId(): Generator<number, number, number> {
  let index = 0;
  while (true) {

    yield index++;
  }
}
