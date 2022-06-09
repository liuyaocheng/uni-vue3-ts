export const useSetNavTitle = (title: string) => {
  console.log(title)

  const { locale, t } = useI18n()
  watch(locale, () => {
    uni.setNavigationBarTitle({
      title: t(title),
    })
  }, {
    immediate: true,
  })
}
