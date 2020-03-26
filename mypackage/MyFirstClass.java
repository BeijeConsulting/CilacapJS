


public class MyFirstClass
{
	/*protected void finalize()
	{
		System.out.println("Adieu");
	}
	*/
	public static void main(String[] args)
	{
		String unito="";
		int i;
		UnisciEStampa prova = new UnisciEStampa();		
		
		for(i=0;i<args.length;i++)
		{
			
			String nome1=args[i];
			unito=prova.unisci(nome1);
		}
		System.out.println(unito);
		
	}
	
}


