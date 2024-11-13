export default {
    name: 'CardsServants',
    props: {
      servants: Array,
      loading: Boolean,
    },
    data() {
      return {
        dialog: false,
        selectedServant: null,
      };
    },
    computed: {
      filteredServants() {
        return this.servants;
      },
    },
    methods: {
      openModal(servant) {
        this.selectedServant = servant;
        this.dialog = true;
      },
      getFaceUrl(servant) {
        return (
          servant.extraAssets?.charaGraph?.ascension[4] ||
          servant.extraAssets?.charaGraph?.ascension[3] ||
          servant.extraAssets?.charaGraph?.ascension[2] ||
          servant.extraAssets?.charaGraph?.ascension[1]
        );
      },
    },
  };
  