const KEY_PREFIX = "solid-toe";

const prefixKey = (key: string) => {
  return `${KEY_PREFIX}:${key}`;
};

export function getLocalItem<T extends string>(key: string): T | null;
export function getLocalItem<T extends string>(
  key: string,
  defaultValue?: T
): T;
export function getLocalItem<T extends string>(key: string, defaultValue?: T) {
  const value = localStorage.getItem(prefixKey(key));

  if (!value && defaultValue) {
    return defaultValue;
  }

  return (value as T) || null;
}

export function setLocalItem<T extends string>(key: string, value: T) {
  return localStorage.setItem(prefixKey(key), value);
}
