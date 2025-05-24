export function addNewRecord(code: string, value: number) {
  const now = new Date().toISOString(); // ✅ ISO format is standard & parseable
  const newRecord = { time: now, value };

  const existing = localStorage.getItem(code);
  const data: Record[] = existing ? JSON.parse(existing) : [];

  data.push(newRecord);
  localStorage.setItem(code, JSON.stringify(data));
}

export interface Record {
  time: string | Date;
  value: number;
}

export function getData(code: string): Record[] {
  const records = localStorage.getItem(code);
  if (records) {
    console.log(records);
    const response = (JSON.parse(records) as Record[]).map((val) => {
      return { ...val, time: new Date(val.time) };
    });
    console.log(response);
    return response;
  } else {
    return [];
  }
}
