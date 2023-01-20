import animals from "/src/assets/animals.json";
import persons from "/src/assets/persons.json";

import { reactive } from "vue";

export const collections = reactive({
    id0: {
        name: "Animals",
        isFetching: false,
        offset: 0,
        limit: 3,
        total: animals.length,
        otherMetaWeDoNotCare: {},
        data: [],
    },
    id1: {
        name: "Employees",
        isFetching: false,
        offset: 0,
        limit: 3,
        total: persons.length,
        otherMetaWeDoNotCare: {},
        data: [],
    },
});

export async function fetchItems(name, offset) {
    const id = name === "Animals" ? "id0" : "id1";
    collections[id].isFetching = true;
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 300);
    });
    collections[id].offset = offset;
    collections[id].data = (name === "Animals" ? animals : persons).slice(offset, offset + 3);
    collections[id].isFetching = false;
}
