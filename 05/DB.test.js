import DB from "./DB";

describe(".insert()", () => {
  it("return one when item inserted", async () => {
    const db = new DB();

    await db.insert({ id: 1, name: "redus" });
    const rows = await db.getRows();
    expect(rows.length).toBe(1);
  });

  it("reject when id not a number", async () => {
    expect.assertions(1);
    const db = new DB();

    try {
      await db.insert({ id: "1", name: "redus" });
    } catch (error) {
      expect(error).toBe("ID can be only number!");
    }
  });

  it("reject when id duplicated", async () => {
    expect.assertions(1);
    const db = new DB();

    try {
      await db.insert({ id: 1, name: "redus" });
      await db.insert({ id: 1, name: "redus" });
    } catch (error) {
      expect(error).toBe("ID can't be duplicated!");
    }
  });

  it("insert data is correct", async () => {
    const data = { id: 1, name: "redus" };
    const db = new DB();
    const insertData = await db.insert(data);

    expect(insertData).toEqual(data);
  });
});

describe("select", () => {
  it("select should return the row by ID", async () => {
    const db = new DB();
    const data = { id: 1, name: "redus" };

    try {
      await db.insert(data);
      const row = await db.select(1);
      expect(row).toEqual(data);
    } catch (error) {
      console.error("Error in test:", error);
      throw error;
    }
  });

  it("select should reject if ID not found", async () => {
    const db = new DB();

    try {
      await db.select(999);
    } catch (error) {
      expect(error).toEqual("ID not found");
    }
  });
});

describe("remove", () => {
  it("remove should delete the row by ID", async () => {
    const db = new DB();
    const data = { id: 1, name: "redus" };
    await db.insert(data);
    await db.remove(1);
    const rows = await db.getRows();
    expect(rows).toHaveLength(0);
  });

  it("should reject if trying to remove a non-existent row", async () => {
    const db = new DB();
    await expect(db.remove(99)).rejects.toEqual("Item not exist!");
  });
});

describe("update", () => {
  it("should reject if trying to update a non-existent row", async () => {
    const db = new DB();
    const updatedData = { id: 99, name: "Unknown" };

    try {
      await db.update(updatedData);
    } catch (error) {
      expect(error).toEqual("ID not found!");
    }
  });

  it("should reject if id is not set during update", async () => {
    const db = new DB();
    const data = { name: "redus" };

    try {
      await db.update(data);
    } catch (error) {
      expect(error).toEqual("ID have to be set!");
    }
  });
});

describe("truncate", () => {
  it("should truncate the database", async () => {
    const db = new DB();
    const data1 = { id: 1, name: "redus" };
    const data2 = { id: 2, name: "redus" };

    try {
      await db.insert(data1);
      await db.insert(data2);
      await db.truncate();
      const rows = await db.getRows();
      expect(rows).toHaveLength(0);
    } catch (error) {
      console.error("Test failed with error: ", error);
      throw error;
    }
  });
});

describe("getRows", () => {
  it("should return all rows in the database", async () => {
    const db = new DB();
    const data1 = { id: 1, name: "redus" };
    const data2 = { id: 2, name: "redus" };

    try {
      await db.insert(data1);
      await db.insert(data2);
      const rows = await db.getRows();
      expect(rows).toHaveLength(2);
      expect(rows).toContainEqual(data1);
      expect(rows).toContainEqual(data2);
    } catch (error) {
      console.error("Test failed with error:", error);
      throw error;
    }
  });
});
