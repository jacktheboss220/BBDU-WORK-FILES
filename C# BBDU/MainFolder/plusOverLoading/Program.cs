using System;

class PlusOverLoading
{
    public int x;
    public PlusOverLoading(int x)
    {
        this.x = x;
    }

    public static PlusOverLoading operator +(PlusOverLoading a, PlusOverLoading b)
    {
        return new PlusOverLoading(a.x + b.x);
    }
    public static PlusOverLoading operator +(PlusOverLoading a, int b)
    {
        return new PlusOverLoading(a.x + b);
    }
    public static PlusOverLoading operator +(int a, PlusOverLoading b)
    {
        return new PlusOverLoading(a + b.x);
    }
    public static PlusOverLoading operator -(PlusOverLoading a, PlusOverLoading b)
    {
        return new PlusOverLoading(a.x - b.x);
    }
    public static PlusOverLoading operator -(PlusOverLoading a, int b)
    {
        return new PlusOverLoading(a.x - b);
    }
    public static PlusOverLoading operator -(int a, PlusOverLoading b)
    {
        return new PlusOverLoading(a - b.x);
    }
    static void Main(string[] args)
    {
        PlusOverLoading a = new PlusOverLoading(10);
        PlusOverLoading b = new PlusOverLoading(20);
        PlusOverLoading c = a + b;
        Console.WriteLine(a.x);
        Console.WriteLine(b.x);
        Console.WriteLine(c.x);
        Console.ReadKey();
    }
}
