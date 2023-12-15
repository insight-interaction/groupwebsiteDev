export function getLocalSvgList() {
    const all = require("@/assets/observablehq_22052020.csv") as CsvRecord[]
    const context = require.context("@/assets/svg/bar13052020", true, /.svg$/); // deep search inside subdirectory

    const localSvgList = [] as SvgRecord[]

    context.keys().forEach(path => {
        const parts = path.split("/")
        const filename = parts[parts.length-1].split(".")[0]
        const [urlId, svgId, mode] = filename.split("_")

        const record = all.find(d => d.urlId == urlId)

        if (record) {
            localSvgList.push({
                urlId,
                svgId,
                src: context(path),
                url: record.url,
                date: record.date
            })
        }
    })

    return localSvgList
}