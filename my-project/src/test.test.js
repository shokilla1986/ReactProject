export function formatTimeStrings(strings) {
  if (strings.length > 1) {
    return `${strings[0]} - ${strings[strings.length - 1]}`;
  }

  if (strings.length) {
    return `${strings[0]} - Till tomorrow`;
  }

  return `None`;
}

describe("test function formatTimeStrings", () => {
  it("should call formatTimeStrings with numbers", () => {
    const result = formatTimeStrings([1, 2, 3, 4]);

    expect(result).toBe("1 - 4");
  });

  it("should call formatTimeStrings with one number", () => {
    const result = formatTimeStrings([1]);

    expect(result).toBe("1 - Till tomorrow");
  });
  it("should call formatTimeStrings without numbers", () => {
    const result = formatTimeStrings([]);

    expect(result).toBe("None");
  });
});
