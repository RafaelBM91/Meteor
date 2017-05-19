export default resolvers =  {
	Search: {
		coment(_,args) {
			return ({ texto: "holaaaaaaa" });
		}
	},
  Query: {
    test(_, args) {
      return "Hola Mundo.!";
    },
    query(_, args) {
    	return Search;
    }
  }
};
