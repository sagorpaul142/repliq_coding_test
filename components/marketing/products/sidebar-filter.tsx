import React from 'react';

interface SidebarFilterProps{
  filters:any
}

const SidebarFilter:React.FC<SidebarFilterProps> = ({filters}) => {
  return (
    <div className="hidden lg:block">
      <form className="space-y-10 divide-y divide-gray-200">
        {filters.map((section:any, index:number) => (
          <div key={section.name} className={index === 0 ? '' : 'pt-10'}>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
              <div className="space-y-3 pt-6">
                {section.options.map((option:any, optionIdx:number) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SidebarFilter;