Array.prototype.sortBy = function (p) {
  return this.slice(0).sort((a, b) => (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0);
}

objs = [{ age: 44, name: 'Kim' }, { age: 24, name: 'Lee' }, { age: 74, name: 'Park' }];

console.log("By Age");
console.log(objs.sortBy('age'));

console.log("By Name");
console.log(objs.sortBy('name'));

// ---- Recent Approach -----------------

// sort by age
objs.sort((a, b) => a.age - b.age);
console.log(objs);

// sort by name : case insensitive
objs.sort((a, b) => (a.name < b.name) ? -1 : Number(a.name > b.name));
console.log(objs);

// sort by name : case sensitive
objs.sort((a, b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  return (nameA < nameB) ? -1 : Number(nameA > nameB);
});
