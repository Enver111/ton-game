import Action from "@/components/Action";

export default function ActionList({actions}: {actions: string[]}){
  return (
    <div className={"actions"}>
      { actions.map((action, index) => {
          return <Action key={index} type={action}/>
        }
      )}
    </div>
  )
}