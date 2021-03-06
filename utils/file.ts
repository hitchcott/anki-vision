import Dexie from "dexie";

const db = new Dexie("anki-vision") as any;

db.version(1).stores({ data: "id" });

export function loadFile(file) {
  return new Promise((resolve) => {
    const f = file[0];
    const r = new FileReader() as any;
    r.onload = async () => {
      const buffer = new Uint8Array(r.result);
      try {
        await db.data.put({ id: 1, buffer });
      } catch (e) {
        console.log(e);
      }
      resolve(buffer);
    };
    r.readAsArrayBuffer(f);
  });
}

export async function getSavedFile() {
  const data = await db.data.where("id").equals(1).first();
  if (data && data.buffer) {
    return data.buffer;
  } else {
    return false;
  }
}

export async function clear() {
  await db.data.where("id").equals(1).delete();
}
