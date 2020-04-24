const DATA_KEY = 'DATA_KEY';

class LocalStorageService {
  save(data) {
    const items = this.get();

    items.push({id: items.length, ...data});

    window.localStorage.setItem(DATA_KEY, JSON.stringify(items));
  }

  get() {
    const dataRaw = window.localStorage.getItem(DATA_KEY);

    let items = [];

    if (dataRaw) {
      items = JSON.parse(dataRaw);
    }

    return items;
  }
}

export default new LocalStorageService();
