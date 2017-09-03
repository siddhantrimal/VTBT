using UnityEngine;
using System.Collections;

public class ContactStairs : MonoBehaviour {

	void start()
	{
		GameObject.Find ("CustomPlayer").SendMessage ("UpdateGCD", 20);
	}

	void update()
	{
		GameObject.Find ("CustomPlayer").SendMessage ("UpdateGCD", 20);
	}

	void OnTriggerEnter(Collider CustomPlayer)
	{
		GameObject.Find("CustomPlayer").SendMessage("UpdateGCD",20);
	}

	void OnTriggerExit(Collider CustomPlayer)
	{
		GameObject.Find("CustomPlayer").SendMessage("UpdateGCD",0.3);
	}
	
}
