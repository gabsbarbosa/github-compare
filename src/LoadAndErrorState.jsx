const [loading, setLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
  async function getRepository() {
    try {
      setLoading(true);
      const response = await api.get(`repos/${repoName}`);
      const repository = response.data;

      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }finally {
      setLoading(false);
    }
  }
  getRepository();
}, []);