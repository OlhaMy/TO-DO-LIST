export function saveToLs(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return null;
  }
}
