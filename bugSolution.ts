function greet(person: string, date: Date): string {
  const dateString: string = date.toDateString();
  console.log(`Hello, ${person}, today is ${dateString}!`);
  return `Hello, ${person}, today is ${dateString}!`;
}

greet("world", new Date());