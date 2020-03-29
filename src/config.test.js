import Config from "./config"

describe("options", () => {
  it ("can override", () => {
    const input = "#abc123"
    const config = Config({
      override: {
        [input]: true
      }
    })
    const override = config.getOverride(input)
    expect(override).toBeTruthy()
    expect(override.value).toBeTruthy()
  })

  it ("can set alpha threshold", () => {
    const input = 45
    const config = Config({
      threshold: {
        alpha: input
      }
    })
    expect(config.threshold.alpha).toEqual(input)
  })

  it ("has default values", () => {
    const config = Config()
    expect(config.threshold.alpha).toEqual(75)
    expect(config.threshold.luminance).toEqual(0.17)
    expect(config.getOverride("#abc123")).toBeNull()
  })
})
