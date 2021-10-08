import java.io.*;
import java.lang.reflect.Array;
import java.util.*;
/*
* Maine kaise kiya hota
*
* ek function - specific cordinate k maps ko call karne k liye
* ek if condition - like if(the calculated distance after first function < the stored distaace) then stored_distance = calculated distance
*                           else { get the map of the current coordinate and call function one for every value present in that list
*
* */
public class Lab1U13004126II {
    public static void main(String[] args) throws IOException {
        File file = new File("hikernet2.txt");
        BufferedReader br
                = new BufferedReader(new FileReader(file));

        String st;
        int n = 0;

        Hiker[] hikers = new Hiker[0];

        int index = -1;
        while ((st = br.readLine()) != null) {
            if (st.length() == 1) {
                n = Integer.parseInt(st);
                hikers = new Hiker[n];
            } else {
                String[] info = st.split(" ");
                hikers[index] = new Hiker(Integer.parseInt(info[0]), Integer.parseInt(info[1]));
            }
            index++;
        }

        for (Hiker hiker : hikers) {
            System.out.println(hiker);
        }
        System.out.println("--------------------");

        HashMap<Integer, ArrayList<Integer>> graph = new HashMap<>();
        HashMap<Integer, Hiker> hashToObject = new HashMap<>();
        for (Hiker hiker : hikers) {
            graph.put(hiker.hashCode(), new ArrayList<>());
        }

        for (Hiker hiker : hikers)
            for (Hiker otherHiker : hikers)
                if (!hiker.equals(otherHiker)) {
                    graph.get(hiker.hashCode()).add(otherHiker.hashCode());
                    hashToObject.put(hiker.hashCode(), hiker);
                }

        for (int name : graph.keySet()) {
            String value = graph.get(name).toString();
            System.out.println(name + " => " + value);
        }

        /*
            363771819 => [2129789493, 668386784, 1329552164]
            668386784 => [2129789493, 1329552164, 363771819]
            1329552164 => [2129789493, 668386784, 363771819]
            2129789493 => [668386784, 1329552164, 363771819]
         */

        System.out.println();
        int maxDistance = 0;
        for (int i = 0; i < n; i++) {
            Hiker a = hikers[i];
            for (int j = 0; j < n; j++) {
                Hiker b = hikers[j];
                if(!a.equals(b)) {
                    int distance = a.calculateDistanceBetween(b);
                    maxDistance = Math.min(maxDistance, distance);
                }
            }
        }
        System.out.println();

        try {
            FileWriter fw = new FileWriter("hikernet2out.txt");
            fw.write(Integer.toString(maxDistance));
            fw.close();
            System.out.println("-------------------");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    private static void breadthFirstSearch(HashMap<Integer, ArrayList<Integer>> graph, int start, int stop, HashMap<Integer, Boolean> visited) {
        LinkedList<Integer> currentPath = new LinkedList<>();

        System.out.println("------------start: " + start);
        System.out.println("------------stop: " + stop);
        currentPath.add(start);

        while(!currentPath.isEmpty()) {
            int current = currentPath.removeFirst();
            if(!visited.get(current)) {
                visited.put(current, true);

                System.out.println(current);
                for(Integer neighbour: graph.get(current)) {
                    if(!visited.get(neighbour)) {
                        currentPath.add(neighbour);
                    }
                }
            }
        }
        System.out.println();
    }

    private static void BFS(HashMap<Integer, ArrayList<Integer>> graph, Hiker[] hikers) {
        HashMap<Integer, Boolean> visited = new HashMap<>();
        for (int hash : graph.keySet()) {
            visited.put(hash, false);
        }

        breadthFirstSearch(graph, hikers[0].hashCode(), hikers[3].hashCode(), visited);
        for(Integer node: graph.keySet()) {
            if(!visited.get(node)) {
                breadthFirstSearch(graph, node, hikers[3].hashCode(), visited);
            }
        }
    }
}
